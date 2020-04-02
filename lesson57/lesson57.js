class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.state = "unauthorized";
        }
}

// Пост ссылается на User. Когда смотришь на посты, можно узнать  кому они принадлежат
class Post {
    constructor(id, image, description, user, like) {
        this.id = id;
        this.image = image;
        this.description = description;
        this.user = user;
        this.like = like;
    }
}

class Comment {
    constructor(id, user, post){
        this.id = id,
        this.user = user,
        this.post = post;
    }
}
const user1 = new User(1, "ainura", "ai@mail.ru");
const user2 = new User(2, "merim", "mm@mail.ru");
const user3 = new User(3, "aisuluu", "ais@mail.ru");

const post1 = new Post(1, "image1", "nice", user1, 5);
const post2 = new Post(2, "image2", "cool", user2, null);
const post3 = new Post(3, "image2", "good", user3, 5);

// console.log(post1)
// console.log(post2)

const postlist = [];

function addPost() {
    postlist.push(post1)
    postlist.push(post2)
    postlist.push(post3)
 }
addPost()

// console.log(postlist)

function stateChange(user){
    if(user.state === 'unauthorized'){
        user.state = 'authorized'
    }
}
stateChange(user1)
// console.log(user1)

function likeChange(id){
    postlist.forEach(post => {
        if(post.id === id) {
           if(post.like === null){
               post.like = 5
           }else{
            delete post.like
           }
        }
    })
    
}
likeChange(2)
console.log(post2)
