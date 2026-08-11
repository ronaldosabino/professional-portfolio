import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  downloadResume() {
    const resumeUrl = 'assets/Curriculo_Ronaldo_Sabino.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Curriculo_Ronaldo_Sabino.pdf';
    link.click();
  }
}
