const Util = {
    distance(pos1, pos2) { 
        return Math.sqrt(((pos2[0] - pos1[0]) ** 2) + ((pos2[1] - pos1[1]) ** 2 ))
    },

}

export default Util;