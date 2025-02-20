import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageServiceService } from '../../services/image-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-image-loader',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './image-loader.component.html',
  styleUrl: './image-loader.component.css'
})
export class ImageLoaderComponent {
  private _snackBar = inject(MatSnackBar);
  errorMessage: string = "";
  isLoading: boolean = false;
  imageUrl: string | null = null;
  defaultImageUrl: string = environment.defaultImageUrl;

  constructor(private imageService: ImageServiceService) { }

  onImageError() {
    console.log(this.defaultImageUrl)
    this.imageUrl = this.defaultImageUrl;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  fetchImage = () => {
    this.isLoading = true;
    this.errorMessage = '';
    this.imageUrl = '';

    this.imageService.getImage().subscribe(response => {
      this.imageUrl = response;
      this.isLoading = false;
    }, error => {
      this.onImageError();
      this.isLoading = false;
      this.errorMessageHandling(error.status, error.statusText);
    });
  }

  errorMessageHandling(status: number, statusText: string): void {
    if (status === 404) {
      this.errorMessage = 'Image not found.';
      this.openSnackBar(this.errorMessage, 'Close');
    } else if (status === 500) {
      this.errorMessage = 'Internal server error. Please try again later.';
      this.openSnackBar(this.errorMessage, 'Close');
    } else if (status === 0) {
      this.errorMessage = 'Network error. Please check your internet connection.';
      this.openSnackBar(this.errorMessage, 'Close');
    } else {
      this.errorMessage = statusText || 'An unknown error occurred.';
      this.openSnackBar(this.errorMessage, 'Close');
    }
  }
}
