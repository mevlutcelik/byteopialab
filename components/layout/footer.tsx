import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="font-playfair text-3xl font-bold tracking-tight">
              Byte<span className="text-emerald-700">Opia</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Teknolojiye tutkulu gençlerin bir araya gelerek fikir ürettiği, geliştirdiği ve hayata geçirdiği yenilikçi
              bir oluşum.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-muted-foreground hover:text-foreground transition-colors">
                  Atölyeler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Bağlantı</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ByteOpia. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
