function changeBg() {
    let type = pokemon['types'][0]['type']['name'];

    if (type == 'grass') {
       return 'var(--green)';
    } 
    if (type == 'fire') {
        return 'var(--red)';
    }
    if (type == 'water') {
        return 'var(--blue)';
    }
    if (type == 'bug') {
        return 'var(--purple)';
    }
    if (type == 'electric') {
        return 'var(--yellow)';
    }
    if (type == 'normal') {
        return 'var(--ochre)';
    }
    if (type == 'poison') {
        return 'var(--pink)';
    }
    if (type == 'ground') {
        return 'var(--brown)';
    }
    if (type == 'fairy') {
        return 'var(--rosa)';
    }
}

function changeBgItems() {
    let type = pokemon['types'][0]['type']['name'];

    if (type == 'grass') {
    return 'var(--lightgreen)';
    } 
    if (type == 'fire') {
        return 'var(--lightred)';
    }
    if (type == 'water') {
        return 'var(--lightblue)';
    }
    if (type == 'bug') {
        return 'var(--lightpurple)';
    }
    if (type == 'electric') {
        return 'var(--lightyellow)';
    }
    if (type == 'normal') {
        return 'var(--lightochre)';
    }
    if (type == 'poison') {
        return 'var(--lightpink)';
    }
    if (type == 'ground') {
        return 'var(--lightbrown)';
    }
    if (type == 'fairy') {
        return 'var(--lightrosa)';
    }
}

function changeBoxShadow() {
    let type = pokemon['types'][0]['type']['name'];

    if (type == 'grass') {
        return '-2px -2px 20px 2px var(--lightgreen), 2px 2px 20px 2px var(--lightgreen);';
    } 
    if (type == 'fire') {
        return '-2px -2px 20px 2px var(--lightred), 2px 2px 20px 2px var(--lightred);';
    }
    if (type == 'water') {
        return '-2px -2px 20px 2px var(--lightblue), 2px 2px 20px 2px var(--lightblue);';
    }
    if (type == 'bug') {
        return '-4px -4px 20px 4px var(--lightpurple), 4px 4px 20px 4px var(--lightpurple);';
    }
    if (type == 'electric') {
        return '-2px -2px 20px 2px var(--lightyellow), 2px 2px 20px 2px var(--lightyellow);';
    }
    if (type == 'normal') {
        return '-2px -2px 20px 2px var(--lightochre), 2px 2px 20px 2px var(--lightochre);';
    }
    if (type == 'poison') {
        return '-2px -2px 20px 2px var(--lightpink), 2px 2px 20px 2px var(--lightpink);';
    }
    if (type == 'ground') {
        return '-1px -1px 20px 1px var(--lightbrown), 1px 1px 20px 1px var(--lightbrown);';
    }
    if (type == 'fairy') {
        return '-2px -2px 20px 2px var(--lightrosa), 2px 2px 20px 2px var(--lightrosa);';
    }
}