import Link from "next/link"
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Foooter() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Studio1</h2>
              <p className="text-muted-foreground w-96">
                A collection of 100+ responsive HTML templates for your startup business or side project.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="font-bold">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Overview
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Marketplace
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Team
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sales
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Advertise
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">© 2024 Shadcnblocks. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms and Conditions
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}