// SPDX-License-Identifier: MIT

pragma solidity >=0.8.6;

/* ***************************************************************************************************************************
A simple contract to store favourite number in a publicly accessible variable. Initially favourite number = 7.
Whenver a user stores their favourite number into the variable using a function, an event is emitted.
**************************************************************************************************************************** */

contract SimpleStorage {
    uint256 public favouriteNumber;

    event NumberSaved(address indexed user, uint256 number, uint256 timestamp);

    constructor() {
        favouriteNumber = 7;
    }

    function storeNumber(uint256 _favouriteNumber) public {
        favouriteNumber = _favouriteNumber;
        emit NumberSaved(msg.sender, _favouriteNumber, block.timestamp);
    }
}
