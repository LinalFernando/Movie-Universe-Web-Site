new Vue({
    el: '#feedback',
    data: {
        comments: [
            { name: 'Stranger', comment: 'This is a beautiful website!' },
        ],
        newFeedback: {
            name: '',
            comment: ''
        }
    },
    methods: {
        addComment: function () {
            this.comments.push(this.newFeedback);
            this.newFeedback = { name: '', comment: '' };
        }
    }
});
