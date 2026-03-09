import { Heart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart weight="fill" className="w-6 h-6 text-primary" />
          <p className="text-lg font-medium">Alicia & Stephan</p>
          <Heart weight="fill" className="w-6 h-6 text-primary" />
        </div>
        <p className="text-muted-foreground mb-4">October 17, 2026 • Orlando, Florida</p>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Wedding Details</Link>
          <Link to="/travel" className="hover:text-primary transition-colors">Travel</Link>
          <Link to="/registry" className="hover:text-primary transition-colors">Registry</Link>
        </div>
      </div>
    </footer>
  )
}
