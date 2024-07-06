const loadBanner = () => {
    // Get a random number between 0 and 3 (inclusive)
    const randomIndex = Math.floor(Math.random() * 4);

    // Define an array of image URLs
    const imageUrls = ['./images/Banner/Home_V1.jpg', './images/Banner/Home_V2.jpg', './images/Banner/Home_V3.jpg', './images/Banner/Home_V4.jpg'];

    // Set the background image of the div to the selected image
    const homeBannerContainer = document.querySelector('#homeBannerContainer');
    homeBannerContainer.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('" + imageUrls[randomIndex] + "')";
};
loadBanner();
