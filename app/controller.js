class BBQBlog {
    constructor() {
        this.posts = [];
        this.postsContainer = document.getElementById('postsContainer');
        this.loading = document.getElementById('loading');
        this.noPosts = document.getElementById('noPosts');
        this.modal = document.getElementById('postModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalBody = document.getElementById('modalBody');
        
        this.init();
    }

    async init() {
        await this.loadPosts();
        this.renderPosts();
        this.setupModal();
    }

    async loadPosts() {
        try {
            const response = await fetch('posts.txt');
            if (!response.ok) {
                throw new Error('Could not load posts.txt');
            }
            const postList = await response.text();
            const potentialPosts = postList.split('\n').filter(filename => filename.trim());

            for (const postFile of potentialPosts) {
                try {
                    const response = await fetch(`posts/${postFile}`);
                    if (response.ok) {
                        const content = await response.text();
                        const postData = this.parsePost(content, postFile);
                        if (postData) {
                            this.posts.push(postData);
                        }
                    }
                } catch (error) {
                    console.log(`Could not load ${postFile}`);
                }
            }

            // Sort posts by date (newest first)
            this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } catch (error) {
            console.error('Error loading posts:', error);
            this.noPosts.style.display = 'block';
        }
    }


    createTitle(filename) {
        return filename.replace('.html', '').replace('.txt', '').replace(/-/g, ' ').replace(/_/g, ' ');
    }

    // Parse the post content and extract metadata
    parsePost(content, filename) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        
        // Extract metadata from the post
        const titleElement = doc.querySelector('h1, .post-title, title');
        const excerptElement = doc.querySelector('.excerpt, .summary, p');
        const dateElement = doc.querySelector('.date, .post-date');
        const authorElement = doc.querySelector('.author, .post-author');

        const title = titleElement ? titleElement.textContent.trim() : this.createTitle(filename);
        const excerpt = excerptElement ? excerptElement.textContent.trim().substring(0, 150) + '...' : 'No excerpt available.';
        const date = dateElement ? dateElement.textContent.trim() : new Date().toLocaleDateString();
        const author = authorElement ? authorElement.textContent.trim() : 'BBQ Master';

        return {
            filename,
            title,
            excerpt,
            date,
            author,
            content
        };
    }

    renderPosts() {
        this.loading.style.display = 'none';
        
        if (this.posts.length === 0) {
            this.noPosts.style.display = 'block';
            return;
        }

        this.postsContainer.style.display = 'grid';
        
        this.posts.forEach(post => {
            const postCard = this.createPostCard(post);
            this.postsContainer.appendChild(postCard);
        });
    }

    createPostCard(post) {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-excerpt">${post.excerpt}</div>
            <div class="post-meta">
                <span>By ${post.author} • ${post.date}</span>
                <button class="read-more">Read More 🍖</button>
            </div>
        `;

        card.addEventListener('click', () => this.openPost(post));
        return card;
    }

    openPost(post) {
        this.modalTitle.textContent = post.title;
        this.modalBody.innerHTML = post.content;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    setupModal() {
        const closeBtn = document.querySelector('.close');
        
        closeBtn.addEventListener('click', () => this.closeModal());
        
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize the blog when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new BBQBlog();
});