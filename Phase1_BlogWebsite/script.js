function toggleFullPost(link) {
    const fullPost = link.nextElementSibling;
    const image = fullPost.querySelector('img');
    
    if (fullPost.style.display === 'none') {
        fullPost.style.display = 'block';
        image.style.transform = 'scale(1.1)';
    } else {
        fullPost.style.display = 'none';
        image.style.transform = 'scale(1)';
    }
}
