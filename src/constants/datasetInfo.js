class Dataset {
  constructor(url, title, description) {
    this.url = url;
    this.title = title;
    this.description = description;
  }
}

export const datasetsArray = [
  new Dataset(
    "http://www.topology-zoo.org/",
    "The Internet Topology Zoo",
    "This dataset does not include information about delays but only the geographic locations of the nodes. You can use these locations to compute a lower bound (propagation delay) of the latency.\nNote that nodes could also be just ISP points of presence."
  ),
  new Dataset(
    "https://www.isolario.it/",
    "Isolario Project",
    "This project could be on break."
  ),
  new Dataset(
    "https://github.com/leomaurodesenv/game-datasets#dataset",
    "Gaming Datasets",
    "Delay is a key measure in the evaluation of the user experience in online gaming applications, thus you can find these datasets useful.\nUsually, they specify the round-trip delay as lag.\nThese datasets usually refer to small groups."
  )
];
