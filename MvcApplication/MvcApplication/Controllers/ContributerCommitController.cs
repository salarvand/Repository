using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Octokit;

namespace MvcApplication.Controllers
{
    public class ContributerCommitController : ApiController
    {
        // GET api/ContributerCommit
        public async Task<IEnumerable<Contributor>> Get(string owner, string name)
        {
            var github = new GitHubClient(new Connection(new ProductHeaderValue("hi","by")));

            var contributers = await github.Repository.Statistics.GetContributors(owner, name);

            //Author.Login
            //Total
            return contributers;
        }

    }
}