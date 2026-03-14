import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XIcon, CaretLeftIcon, CaretRightIcon, CameraIcon } from '@phosphor-icons/react'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const photos = [
    { id: 1, url: '/photos/gallery/jamaica-01.jpeg', alt: 'Jamaica proposal - palm trees by the sea' },
    { id: 2, url: '/photos/gallery/jamaica-05.jpeg', alt: 'Jamaica proposal - holding the sun' },
    { id: 3, url: '/photos/gallery/jamaica-06.jpeg', alt: 'Jamaica proposal - beach lift' },
    { id: 4, url: '/photos/gallery/jamaica-04.jpeg', alt: 'Jamaica proposal - ring closeup' },
    { id: 5, url: '/photos/gallery/jamaica-07.jpeg', alt: 'Jamaica proposal - sunset silhouette' },
    { id: 6, url: '/photos/gallery/jamaica-09.jpeg', alt: 'Jamaica proposal - garden embrace' },
    { id: 7, url: '/photos/gallery/jamaica-10.jpeg', alt: 'Jamaica proposal - forehead kiss' },
    { id: 8, url: '/photos/gallery/jamaica-11.jpeg', alt: 'Jamaica proposal - garden kiss' },
    { id: 9, url: '/photos/gallery/jamaica-12.jpeg', alt: 'Jamaica proposal - pier kiss' },
    { id: 10, url: '/photos/gallery/jamaica-13.jpeg', alt: 'Jamaica proposal - dramatic pier pose' },
    { id: 11, url: '/photos/gallery/jamaica-14.jpeg', alt: 'Jamaica proposal - sunset dip' },
    { id: 12, url: '/photos/gallery/jamaica-15.jpeg', alt: 'Jamaica proposal - gazebo kiss' },
    { id: 13, url: '/photos/gallery/jamaica-16.jpeg', alt: 'Jamaica proposal - gazebo embrace' },
    { id: 14, url: '/photos/gallery/jamaica-03.jpeg', alt: 'Jamaica proposal - sunset laughs' },
    { id: 15, url: '/photos/gallery/jamaica-08.jpeg', alt: 'Jamaica proposal - holding hands' },
  ]

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const goToPrevious = () => {
    if (selectedImage !== null) setSelectedImage((selectedImage - 1 + photos.length) % photos.length)
  }
  const goToNext = () => {
    if (selectedImage !== null) setSelectedImage((selectedImage + 1) % photos.length)
  }

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <CameraIcon weight="fill" className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Jamaica Engagement Shoot
          </h2>
          <Separator className="w-24 mx-auto bg-primary h-0.5 mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of our favorite moments from our engagement shoot in beautiful Jamaica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <CameraIcon weight="fill" className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 border-0 bg-transparent shadow-none">
          <AnimatePresence mode="wait">
            {selectedImage !== null && (
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close gallery"
                >
                  <XIcon weight="bold" className="w-6 h-6" />
                </button>

                <div className="relative bg-card rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={photos[selectedImage].url}
                    alt={photos[selectedImage].alt}
                    className="w-full max-h-[80vh] object-contain"
                  />
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <CaretLeftIcon weight="bold" className="w-8 h-8" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); goToNext() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <CaretRightIcon weight="bold" className="w-8 h-8" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                  {selectedImage + 1} / {photos.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  )
}
