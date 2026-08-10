import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
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
