# Import the Metaphor API client
from metaphor_python import Metaphor
import os
# Create an instance of the client with your API key
# print(os.environ.get("METAPHOR_API_KEY"))
client = Metaphor(api_key=os.environ.get("METAPHOR_API_KEY"))

# Define a function that takes a query and returns the analytics from a blockchain index
def get_blockchain_analytics(query):
  # Search for relevant results using the Metaphor API
  results = client.search(query, num_results=10, include_domains=["https://thegraph.com/"], use_autoprompt=True)
  
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
query = "latest tokens"
query = "Find premia and UNCX Lockers V3 and ens subgraphs explorer"
query = "Fetch the latest subgraphs present to query"
analytics = get_blockchain_analytics(query)

# Print the analytics
print(analytics)
