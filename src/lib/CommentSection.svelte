<script lang="ts">
  import type { Comment } from '../types';
  
  export let comments: Comment[];
  
  let newComment = '';
  
  function handleSubmitComment() {
    if (newComment.trim()) {
      comments = [...comments, {
        id: String(comments.length + 1),
        username: 'CurrentUser',
        content: newComment,
        likes: 0,
        timestamp: 'Just now'
      }];
      newComment = '';
    }
  }
</script>

<div class="bg-white p-4 rounded-lg shadow-md">
  <h3 class="text-xl font-bold mb-4">Comments ({comments.length})</h3>
  
  <div class="mb-4">
    <textarea
      bind:value={newComment}
      placeholder="Add a comment..."
      class="w-full p-2 border rounded-lg resize-none"
      rows="3"
    ></textarea>
    <button
      on:click={handleSubmitComment}
      class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Comment
    </button>
  </div>
  
  <div class="space-y-4">
    {#each comments as comment (comment.id)}
      <div class="border-b pb-4">
        <div class="flex justify-between items-start mb-2">
          <div class="font-bold">{comment.username}</div>
          <div class="text-gray-500 text-sm">{comment.timestamp}</div>
        </div>
        <p class="text-gray-700">{comment.content}</p>
        <div class="mt-2 text-sm text-gray-500">
          👍 {comment.likes}
        </div>
      </div>
    {/each}
  </div>
</div>