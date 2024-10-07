import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})

export class OffersComponent {
  // for (let index = 1; index <= 4; index++) {
  //   const assetUrl = `
  //     mt-0937-home-img${index}
  //   `;

  //   document.getElementById("offerElements").innerHTML += `
  //     <div class="card" style="width: 18rem;">
  //       <img src="${assetUrl}" class="card-img-top" alt="...">
  //       <div class="card-body">
  //         <h5 class="card-title">Card title</h5>
  //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //         <a href="#" class="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>
  //   `; 
  // };

  assetUrl: string[] = ["mt-0937-home-img1.jpg", "mt-0937-home-img2.jpg", "mt-0937-home-img3.jpg", "mt-0937-home-img4.jpg"];
}
