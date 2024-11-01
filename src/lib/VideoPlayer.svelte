<script lang="ts">
  export let videoUrl: string;
  export let title: string;
  export let description: string;
  export let views: number;
  export let shares: number;
</script>

<div class="video-container">
  <h1>{title}</h1>
  <div class="video-stats">
    <span>{views.toLocaleString()} views</span>
    <span>{shares.toLocaleString()} shares</span>
  </div>
  <video src={videoUrl} controls class="video-player"></video>
  <p class="description">{description}</p>
</div>

<style>
  .video-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .video-player {
    width: 100%;
    margin: 20px 0;
  }
  
  .video-stats {
    color: #666;
    margin: 10px 0;
  }
  
  .video-stats span {
    margin-right: 20px;
  }
  
  .description {
    color: #333;
    line-height: 1.6;
  }
</style>