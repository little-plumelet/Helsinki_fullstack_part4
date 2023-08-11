const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((acc, blog) => {
    return acc += blog.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  let favourite = blogs[0]
  blogs.forEach(blog => {
    if (blog.likes > favourite.likes) favourite = blog
  })
  return favourite
}

const mostLikes = (blogs) => {
  const favourit = {
    author: '',
    likes: 0
  }
  blogs.forEach(blog => {
    if (blog.likes > favourit.likes) {
      favourit.author = blog.author
      favourit.likes = blog.likes
    }
  })
  return favourit
}

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
  favoriteBlog
}