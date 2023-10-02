# Import the Metaphor API client
from metaphor_python import Metaphor
import os
# Create an instance of the client with your API key
# print(os.environ.get("METAPHOR_API_KEY"))
client = Metaphor(api_key=os.environ.get("METAPHOR_API_KEY"))

# Define a function that takes a query and returns the analytics from a blockchain index
def get_songs(query):
  # Search for relevant results using the Metaphor API
  results = client.search(query, num_results=10, include_domains=["https://open.spotify.com/", "https://www.pandora.com/", "https://soundcloud.com/","https://music.apple.com/", "https://www.mixcloud.com/", "https://tidal.com/", "https://music.amazon.com/", "https://www.deezer.com/", "https://8tracks.com/", "https://hypeddit.com/", "https://www.twitch.tv/","https://bandcamp.com/"], use_autoprompt=True)
  
  # Extract the data from the finance results
#   finance_data = []
#   for result in results["finance_results"]:
#     finance_data.append(result["data"])
  
#   # Extract the URLs from the web results
#   web_urls = []
#   for result in results["web_search_results"]:
#     web_urls.append(result["url"])
  
  # Return a dictionary with the finance data and the web URLs
  return results

# Test the function with an example query
query = "Rolling in the deep"
songs = get_songs(query)

# Print the analytics
print(songs)
