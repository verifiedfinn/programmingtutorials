class Carousel {
    constructor(dataUrl, container, id) {
        this.dataUrl = dataUrl;
        this.container = container;
        this.id = id; 

   
        this.$carousel = $(`<div class="carousel" id="carousel-${id}"></div>`);
        this.$display = $(`<div id="image-display-${id}" class="image-display"></div>`);
        this.$prevButton = $(`<button id="prev-button-${id}" class="prev">Previous</button>`);
        this.$nextButton = $(`<button id="next-button-${id}" class="next">Next</button>`);

        this.images = [];
        this.currentIndex = 0;

       
        this.loadData().then(() => {
            this.initializeCarousel();
            this.attachEventListeners();
        });
    }

  
    async loadData() {
        try {
            const response = await $.getJSON(this.dataUrl);
            this.images = response.images.map(img => img.image);
        } catch (error) {
            console.error("Error loading JSON data:", error);
        }
    }

    
    initializeCarousel() {
       
        this.$carousel.append(this.$prevButton, this.$display, this.$nextButton);
        $(this.container).append(this.$carousel);

       
        if (this.images.length > 0) {
            this.updateImage();
        } else {
            console.warn("No images found in the data.");
        }
    }

    attachEventListeners() {
        this.$prevButton.on("click", () => this.showPreviousImage());
        this.$nextButton.on("click", () => this.showNextImage());
    }

   
    showPreviousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

  
    showNextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }

    
    updateImage() {
        const currentImage = this.images[this.currentIndex];
        this.$display.css("background-image", `url(${currentImage})`);
    }
}

$(document).ready(function () {
    const carouselContainer = $(".carousel-container");

    
    new Carousel("data/photos.json", carouselContainer, 1);
    new Carousel("data/photos2.json", carouselContainer, 2);
});