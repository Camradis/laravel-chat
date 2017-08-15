<template lang="html">
    <div class="chat-log">
        <chat-message></chat-message>
        <chat-message></chat-message>
        <chat-message></chat-message>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message : "This is message",
            user : "Endi Chy"
        }
    }
}
</script>
