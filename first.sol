pragma solidity 0.4.25;

contract first{
    int unique_id;
    string name;
    int256 secret_key;
    
    
    
    constructor() public
    {
        
        unique_id = 2;
        name = "Pradhyum";
        
        secret_key =891516518461651961181196;  
    }
    
    
    function getUnique() view public returns(int)
    {
        return unique_id;
         
    }
    function getName() view public returns(string)
    {
        return name;
         
    }
       function getSec() view public returns(int256)
    {
        return secret_key;
         
    }
}
