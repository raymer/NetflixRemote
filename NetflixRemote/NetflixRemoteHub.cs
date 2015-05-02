using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace NetflixRemote
{
    public class NetflixRemoteHub : Hub
    {
        public void PushMessage(string message)
        {
            Clients.All.broadcastMessage(message);            
        }
    }
}