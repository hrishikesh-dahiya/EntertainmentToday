<script lang="ts">
  import type { Video } from '../types';
  
  export let video: Video;
  
  function formatNumber(num: number): string {
    return new Intl.NumberFormat().format(num);
  }
  
  function handleLike() {
    video.likes += 1;
  }
  
  function handleShare() {
    video.shares += 1;
    // In a real app, this would open a share dialog
    alert('Sharing functionality would be implemented here!');
  }
</script>

<div class="bg-white p-4 rounded-lg shadow-md mb-4">
  <h2 class="text-2xl font-bold mb-2">{video.title}</h2>
  
  <div class="flex items-center justify-between mb-4">
    <div class="text-gray-600">
      {formatNumber(video.views)} views
    </div>
    
    <div class="flex gap-4">
      <button
        on:click={handleLike}
        class="flex items-center gap-2 hover:text-blue-600"
      >
        <span>👍</span>
        {formatNumber(video.likes)}
      </button>
      
      <button
        on:click={handleShare}
        class="flex items-center gap-2 hover:text-blue-600"
      >
        <span>📤</span>
        {formatNumber(video.shares)}
      </button>
    </div>
  </div>
  
  <p class="text-gray-700">{video.description}</p>
</div>