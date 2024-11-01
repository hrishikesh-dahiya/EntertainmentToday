<script lang="ts">
  export let comments: Array<{
    id: number;
    user: string;
    text: string;
    likes: number;
  }>;
  
  let newComment = "";
  
  function addComment() {
    if (newComment.trim()) {
      comments = [...comments, {
        id: comments.length + 1,
        user: "Current User",
        text: newComment,
        likes: 0
      }];
      newComment = "";
    }
  }
  
  function likeComment(id: number) {
    comments = comments.map(comment => 
      comment.id === id 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
  }
</script>

<div class="comments-section">
  <h2>Comments ({comments.length})</h2>
  
  <div class="add-comment">
    <textarea
      bind:value={newComment}
      placeholder="Add a comment..."
      rows="3"
    ></textarea>
    <button on:click={addComment}>Comment</button>
  </div>
  
  <div class="comments-list">
    {#each comments as comment (comment.id)}
      <div class="comment">
        <strong>{comment.user}</strong>
        <p>{comment.text}</p>
        <button class="like-button" on:click={() => likeComment(comment.id)}>
          👍 {comment.likes}
        </button>
      </div>
    {/each}
  </div>
</div>

<style>
  .comments-section {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }
  
  .add-comment {
    margin: 20px 0;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .comment {
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .like-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
  }
  
  .like-button:hover {
    color: #1a1a1a;
  }
</style>