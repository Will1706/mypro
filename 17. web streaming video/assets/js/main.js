document.addEventListener('DOMContentLoaded', function() {
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');
    const playlistContainer = document.getElementById('video-playlist');

    // --- YOUR GITHUB INFORMATION ---
    const githubUsername = 'YOUR_GITHUB_USERNAME';
    const repoName = 'YOUR_REPOSITORY_NAME';
    const videosFolderPath = 'videos'; // The folder in your repo where videos are stored

    // --- YOUR VIDEO PLAYLIST ---
    const videos = [
        {
            'fileName': 'video1.mp4',
            'title': 'Awesome Nature Documentary',
            'description': 'A stunning look at the beauty of our planet.'
        },
        {
            'fileName': 'video2.mp4',
            'title': 'Coding Tutorial: Building a Website',
            'description': 'Learn the basics of web development in this comprehensive tutorial.'
        },
        {
            'fileName': 'video3.mp4',
            'title': 'Exploring the City at Night',
            'description': 'A cinematic journey through the vibrant city streets after dark.'
        }
        // Add more video objects here
    ];

    /**
     * Generates the video playlist in the sidebar.
     */
    function generatePlaylist() {
        videos.forEach((video, index) => {
            const playlistItem = document.createElement('a');
            playlistItem.href = '#';
            playlistItem.classList.add('list-group-item', 'list-group-item-action');
            playlistItem.textContent = video.title;
            playlistItem.setAttribute('data-index', index);
            playlistContainer.appendChild(playlistItem);
        });
    }

    /**
     * Loads and plays the selected video.
     * @param {number} videoIndex - The index of the video in the `videos` array.
     */
    function loadVideo(videoIndex) {
        const video = videos[videoIndex];
        const videoUrl = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/main/${videosFolderPath}/${video.fileName}`;

        mainVideo.src = videoUrl;
        videoTitle.textContent = video.title;
        videoDescription.textContent = video.description;
        mainVideo.load();
        mainVideo.play();

        // Update active state in playlist
        const allPlaylistItems = document.querySelectorAll('#video-playlist .list-group-item');
        allPlaylistItems.forEach(item => item.classList.remove('active'));
        allPlaylistItems[videoIndex].classList.add('active');
    }

    // Event listener for playlist clicks
    playlistContainer.addEventListener('click', function(event) {
        if (event.target && event.target.matches('.list-group-item')) {
            event.preventDefault();
            const videoIndex = parseInt(event.target.getAttribute('data-index'));
            loadVideo(videoIndex);
        }
    });

    // Initialize the page
    generatePlaylist();
    if (videos.length > 0) {
        loadVideo(0); // Load the first video by default
    }
});