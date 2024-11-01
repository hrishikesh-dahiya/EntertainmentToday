<script lang="ts">
  export let onShare: () => void;
  
  function share() {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this video!',
        url: window.location.href
      }).then(() => {
        onShare();
      }).catch(console.error);
    }
  }
</script>

<button class="share-button" on:click={share}>
  Share
</button>

<style>
  .share-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .share-button:hover {
    background-color: #45a049;
  }
</style>