import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  downloadResume() {
    const resumeUrl = 'assets/Curriculo_Ronaldo_Sabino.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Curriculo_Ronaldo_Sabino.pdf';
    link.click();
  }
}
