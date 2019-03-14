function setState( health )
{
    var currentState = null;

    if(health >= 75)
    {
        currentState = "healthy";
        nodeHealthState(currentState);
        return;
    }
    
    if(health >= 50)
    {
        currentState = "damaged";
        nodeHealthState(currentState);
        return;
    }

    if(health >= 25)
    {
        currentState = "critical";
        nodeHealthState(currentState);
        return;
    }
}

function nodeHealthState(applyState)
{
    var node = document.getElementById('healthbar-color');

    if(node.classList.contains(applyState))
    {
        return;
    }
    else
    {
        node.className = "";
        node.className += " " + applyState;  
    }

}

var app = new Vue({
    el: '#vuejs',
    data:
    {
        health:100,
        ended:false
    },
    watch:
    {

    },
    methods:
    {
        damage: function()
        {
            this.health -= (Math.random() * 35) + 1;

            if(this.health <=0)
            {
                this.ended=true;
            }

            setState(this.health);

        },
        restart: function()
        {
            this.health = 100;
            setState(100);

            this.ended = false;
        }
        
        
    }
})

