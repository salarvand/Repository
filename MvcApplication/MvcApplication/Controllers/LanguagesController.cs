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
    public class LanguagesController : ApiController
    {
        // GET api/Languages
        public async Task<IEnumerable<Octokit.RepositoryLanguage>> Get(string owner,string name)
        {
            var github = new GitHubClient(new Connection(new Octokit.ProductHeaderValue("hi","by")));
            
            var language = await github.Repository.GetAllLanguages(owner, name);

            return language;
        }

    }
}