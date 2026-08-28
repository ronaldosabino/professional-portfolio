import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/ronaldo-sabino', '_blank');
  }

  redirectToGitHub() {
    window.open('https://www.github.com/ronaldosabino', '_blank');
  }

  redirectToWhatsApp() {
    window.open('https://wa.me/5581994479584?text=Olá,%20Ronaldo!', '_blank');
  }
}
