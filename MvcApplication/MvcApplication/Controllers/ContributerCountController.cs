using System.Threading.Tasks;
using System.Web.Http;
using Octokit;

namespace MvcApplication.Controllers
{
    public class ContributerCountController : ApiController
    {
        // GET api/ContributerCount
        public async Task<int> Get(string owner,string name)
        {
            var github = new GitHubClient(new Connection(new Octokit.ProductHeaderValue("hi","by")));

            var contributerCount = await github.Repository.GetAllContributors(owner, name);

            return contributerCount.Count;
        }

    }
}