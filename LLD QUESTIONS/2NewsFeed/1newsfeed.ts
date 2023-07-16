//experience while coding
//1.make all your classes first it would help you get less errors
//2.In typescript removing specific elements from arrays can be fun

class Article {
  title: string;
  author: string;
  content: string;
  timestamp: string;
  topics: Topic[];
  constructor(
    title: string,
    author: string,
    content: string,
    timestamp: string,
    topic: Topic[]
  ) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.timestamp = timestamp;
    this.topics = topic;
  }
  getTitle(): string {
    return this.title;
  }
  getAuthor(): string {
    return this.author;
  }
  getTopics(): Topic[] {
    return this.topics;
  }
  getTimeStamp(): string {
    return this.timestamp;
  }
}
class Topic {
  name: string;
  articles: Article[];
  constructor(name: string) {
    this.name = name;
    this.articles = [];
  }
  getName(): string {
    return this.name;
  }
  getArticles(): Article[] {
    return this.articles;
  }
  addArticle(article: Article): void {
    this.articles.push(article);
  }
  private removeParticularArticle<T>(
    article: T[],
    elementsToRemoveFromArray: T
  ): T[] {
    return article.filter((element) => element != elementsToRemoveFromArray);
  }
  removeArticle(article: Article): void {
    this.articles = this.removeParticularArticle(this.articles, article);
  }
}
class Users {
  name: string;
  email: string;
  subscribedTopics: Topic[];
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.subscribedTopics = [];
  }

  public get Name(): string {
    return this.name;
  }

  public get Email(): string {
    return this.Email;
  }

  public get SubscribedTopics(): Topic[] {
    return this.subscribedTopics;
  }
  SubscribeToTopics(topic: Topic): void {
    this.subscribedTopics.push(topic);
  }
  private removeElementsFromArray<T>(
    Topic: T[],
    elementsToRemoveFromArray: T
  ): T[] {
    return Topic.filter((elements) => elements != elementsToRemoveFromArray);
  }
  UnsubscribeToTopics(topic: Topic): void {
    this.subscribedTopics = this.removeElementsFromArray(
      this.subscribedTopics,
      topic
    );
  }
}
class NewsFeed {
  articles: Article[];
  users: Users[];
  topics: Topic[];

  constructor() {
    this.articles = [];
    this.users = [];
    this.topics = [];
  }

  getArticles(): Article[] {
    return this.articles;
  }

  getUsers(): Users[] {
    return this.users;
  }

  getTopics(): Topic[] {
    return this.topics;
  }

  addArticle(article: Article): void {
    this.articles.push(article);
    const topics = article.getTopics();
    topics.forEach((topic) => {
      topic.addArticle(article);
    });
  }

  removeArticle(article: Article): void {
    const index = this.articles.indexOf(article);
    if (index !== -1) {
      this.articles.splice(index, 1);
      const topics = article.getTopics();
      topics.forEach((topic) => {
        topic.removeArticle(article);
      });
    }
  }

  addUser(user: Users): void {
    this.users.push(user);
  }

  removeUser(user: Users): void {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  addTopic(topic: Topic): void {
    this.topics.push(topic);
  }

  removeTopic(topic: Topic): void {
    const index = this.topics.indexOf(topic);
    if (index !== -1) {
      this.topics.splice(index, 1);
    }
  }
}

// Create instances of the classes
const newsFeed = new NewsFeed();
const topic1 = new Topic("Technology");
const topic2 = new Topic("Sports");

const article1 = new Article(
  "New Tech Gadgets",
  "John Doe",
  "Check out the latest tech gadgets in the market.",
  "2023-07-10",
  [topic1]
);

const article2 = new Article(
  "Football World Cup",
  "Jane Smith",
  "Get updates on the ongoing Football World Cup.",
  "2023-07-09",
  [topic2]
);

const user1 = new Users("Alice", "alice@example.com");
const user2 = new Users("Bob", "bob@example.com");

// Add articles, users, and topics to the news feed
newsFeed.addArticle(article1);
newsFeed.addArticle(article2);
newsFeed.addUser(user1);
newsFeed.addUser(user2);
newsFeed.addTopic(topic1);
newsFeed.addTopic(topic2);

// Subscribe users to topics
user1.SubscribeToTopics(topic1);
user2.SubscribeToTopics(topic2);

// Print the articles in the news feed
console.log("Articles in the News Feed:");
newsFeed.getArticles().forEach((article) => {
  console.log(`- ${article.getTitle()} by ${article.getAuthor()}`);
});

// Print the topics
console.log("\nTopics in the News Feed:");
newsFeed.getTopics().forEach((topic) => {
  console.log(`- ${topic.getName()}`);
});

// Print the subscribed topics of a user
console.log(`\nSubscribed Topics of ${user1.Name}:`);
user1.SubscribedTopics.forEach((topic) => {
  console.log(`- ${topic.getName()}`);
});

// Remove an article from the news feed
newsFeed.removeArticle(article2);

// Print the updated articles in the news feed
console.log("\nUpdated Articles in the News Feed:");
newsFeed.getArticles().forEach((article) => {
  console.log(`- ${article.getTitle()} by ${article.getAuthor()}`);
});

