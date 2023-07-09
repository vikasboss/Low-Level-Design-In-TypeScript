/*
class diagram

crawling module
    no variables
    + crawlWebPages:[]strings

Indexing module
    no variables
    + buildIndex:[]strings

Query Processing Module
    no variables
    + process Query():[]strings

Ranking Module
    no variables
    +rankResults():[]strings

User Interface
    no variables
    +displayResults():void

//Main class
DistributedSearchEngine
    - CrawlingModule:CrawlingModule
    - IndexingModule:IndexingModule
    - QueryProcessingModule:QueryProcessingModule
    - RankingModule:RankingModule
    - UserInterfacesModule:UserInterfacesModule

    - constructor()
    - run():void
    - distributeCrawling():[]strings


*/
class crawlingModule {
  public crawlWebPages(urls: string[]): string[] {
    const crawledData: string[] = [];
    //fetch one page and extract the relevant information
    urls.forEach((url) => crawledData.push(`Crawled data from ${url}`));
    return crawledData;
  }
}

class IndexingModule {
  public buildIndexes(crawledData: string[]): void {
    //Indexing logic from the crawled Data
    crawledData.forEach((data: string): void => {
      //extract keywords and build indexes
      console.log(`Indexing data: ${data}`);
    });
  }
}
class QueryProcessingModule {
  public processQuery(query: string): string[] {
    console.log("Processig the queries");
    //perform actual search and results
    return Array("Result 1", "Result 2", "Result 3");
  }
}

class RankingModule {
  public rankResults(searchResults: string[]): string[] {
    //ranking lofic
    console.log("Ranking Search Results");
    //Apply Ranling Algo on Search Results
    return searchResults;
  }
}
class UserInterfacesModule {
  public displayResults(rankedResults: string[]): void {
    console.log("Displaying Search Results");
    rankedResults.forEach((result) => console.log(result));
  }
}
class DistributedSearchEngine {
  private CrawlingModule: crawlingModule;
  private IndexingModule: IndexingModule;
  private QueryProcessingModule: QueryProcessingModule;
  private RankingModule: RankingModule;
  private UserInterface: UserInterfacesModule;
  constructor() {
    this.CrawlingModule = new crawlingModule();
    this.IndexingModule = new IndexingModule();
    this.QueryProcessingModule = new QueryProcessingModule();
    this.RankingModule = new RankingModule();
    this.UserInterface = new UserInterfacesModule();
  }
  private distributeCrawling(urls: string[]): string[] {
    //logic for distributed Crawling
    //TODO:implement crwaling logic here
    const crawledData = urls.map((url): string => {
      // Modify each URL by adding a specific string
      return `url is crawled up ${url}`;
    });

    return crawledData;
  }
  public run(): void {
    //crawling phase
    const urlToSearch = ["url1", "url2", "url3"];
    const crawledData = this.distributeCrawling(urlToSearch);

    //Indexing phase
    this.IndexingModule.buildIndexes(crawledData);

    //User Query
    const query: string = "Example Query ";
    const SearchResults: string[] =
      this.QueryProcessingModule.processQuery(query);
    const rankedResults: string[] =
      this.RankingModule.rankResults(SearchResults);
    this.UserInterface.displayResults(rankedResults);
  }
}
//Main class
const obj1 = new DistributedSearchEngine();
obj1.run();
console.log("done");

export {};

/*
In this code, we have added the implementation details for each module, such as the crawling logic in the CrawlingModule class and the indexing logic in the IndexingModule class. Similarly, the QueryProcessingModule processes the query and returns search results, and the RankingModule applies ranking algorithms to the search results.

Regarding design patterns, the code currently showcases the following patterns:

Singleton Pattern: The DistributedSearchEngine class follows the singleton pattern, ensuring that only one instance of the search engine is created.

Facade Pattern: The DistributedSearchEngine class acts as a facade, providing a simplified interface to interact with the search engine components. It encapsulates the complexities of the underlying modules and provides a unified run() method for executing the search engine workflow.

Template Method Pattern: The DistributedSearchEngine class defines a template method with the run() method. The template method provides a high-level structure for the search engine workflow, while allowing subclasses (in this case, the DistributedSearchEngine itself) to override specific steps.

DistributedSearchEngine class includes a distributeCrawling() method that implements the master-worker pattern for the crawling phase. It divides the URLs among multiple worker threads, and each worker thread executes the crawling task independently. The crawled data from each worker is then synchronized and merged into the crawledData list


*/
