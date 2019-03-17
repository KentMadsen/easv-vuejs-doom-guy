function setState( health )
{
    var currentState = null;

    if(health == 0)
    {
        currentState = "critical";
        nodeHealthState(currentState);
        nodePlayerState('dead-player-expression');
        return;
    }

    if(health <= 20)
    {
        currentState = "critical";
        nodeHealthState(currentState);
        nodePlayerState('player-critical');
        return;
    }

    if(health <= 65)
    {
        currentState = "damaged";
        nodeHealthState(currentState);
        nodePlayerState('player-damaged');
        return;
    }

    if(health <= 100)
    {
        currentState = "healthy";
        nodeHealthState(currentState);
        nodePlayerState('player-healthy');
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

function nodePlayerState(applyState)
{
    var node = document.getElementById('player');

    if(node.classList.contains(applyState))
    {
        return;
    }
    else
    {
        node.className = "default-player-expression";
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
                this.health=0;
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

