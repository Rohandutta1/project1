// Create a variable to hold the number of NFTs
let numberOfNFTs = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, image) {
  // Create an object to hold the metadata
  const nftMetadata = {
    name: name,
    description: description,
    image: image
  };

  // Increment the number of NFTs
  numberOfNFTs++;

  // Return the created NFT
  return nftMetadata;
}

// Create an array to hold the minted NFTs
const nfts = [];

// Create a loop that will go through the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
  }
}

// Print the total number of NFTs minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + numberOfNFTs);
}

// Call your functions below this line

// Mint some NFTs
const nft1 = mintNFT("NFT 1", "This is the first NFT", "image1.jpg");
const nft2 = mintNFT("NFT 2", "This is the second NFT", "image2.jpg");
const nft3 = mintNFT("NFT 3", "This is the third NFT", "image3.jpg");
// Store the minted NFTs in the array
nfts.push(nft1);
nfts.push(nft2);
nfts.push(nft3);

// List all NFTs
listNFTs();

// Get the total supply of NFTs
getTotalSupply();
