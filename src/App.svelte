<script lang="ts">
  import VideoPlayer from './lib/VideoPlayer.svelte';
  import Comments from './lib/Comments.svelte';
  import ShareButton from './lib/ShareButton.svelte';
  
  let views = 1234;
  let shares = 56;
  
  let comments = [
    {
      id: 1,
      user: "John Doe",
      text: "Great video! Really enjoyed the content.",
      likes: 15
    },
    {
      id: 2,
      user: "Jane Smith",
      text: "Very informative, thanks for sharing!",
      likes: 8
    }
  ];
  
  function handleShare() {
    shares += 1;
  }
</script>

<main>
  <header>
    <h1>Entertainment Today</h1>
  </header>

  <VideoPlayer
    videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
    title="Amazing Nature Documentary"
    description="Experience the wonders of nature in this breathtaking documentary showcasing wildlife in their natural habitat."
    {views}
    {shares}
  />
  
  <div class="actions">
    <ShareButton onShare={handleShare} />
  </div>
  
  <Comments {comments} />
</main>

<style>
  header {
    background-color: #1a1a1a;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .actions {
    max-width: 800px;
    margin: 1rem auto;
    display: flex;
    justify-content: flex-end;
  }
</style>