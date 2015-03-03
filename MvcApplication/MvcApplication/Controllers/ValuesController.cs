using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using MvcApplication.Models;
using Octokit;
using ProductHeaderValue = System.Net.Http.Headers.ProductHeaderValue;

namespace MvcApplication.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public async Task<IEnumerable<Octokit.Repository>> Get(string name)
        {
            var github = new GitHubClient(new Connection(new Octokit.ProductHeaderValue("hi","by")));

            var user = await github.Search.SearchRepo(new SearchRepositoriesRequest(name));

            //var language = await github.Repository.GetAllLanguages("OrchardCMS", "OrchardDoc");

            return  user.Items;
        }

        [HttpGet]
        // GET api/values/5
        public string Lang()
        {
            return "value";
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}