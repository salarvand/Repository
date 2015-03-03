using System.Threading.Tasks;
using System.Web.Http;
using Octokit;

namespace MvcApplication.Controllers
{
    public class BranchCountController : ApiController
    {
        // GET api/BranchCount
        public async Task<int> Get(string owner,string name)
        {
            var github = new GitHubClient(new Connection(new ProductHeaderValue("hi","by")));

            var branch = await github.Repository.GetAllBranches(owner, name);

            return branch.Count;
        }

    }
}