// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract ComplaintRegistration {
    address owner;
    address cyberCrimeAdmin;
    address theftAdmin;
    address drugAdmin;
    address otherAdmin;
    string[] idArray;

    struct Complaint {
        string id;
        uint256 complaintType;
        string name;
        uint256 phone;
        string dob;
        string addr;
        string title;
        string description;
        string nearestPoliceStation;
        string proof;
        string attachment;
        string message;
        bool status;
    }

    mapping(address => string[]) UserComplaints;
    mapping(string => Complaint) Complaints;
    mapping(address => uint256[]) complaintStatus;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute this function");
        _;
    }

    function addCyberCrimeAdmin(address admin) public onlyOwner {
        cyberCrimeAdmin = admin;
    }

    function addTheftAdmin(address admin) public onlyOwner {
        theftAdmin = admin;
    }

    function addDrugAdmin(address admin) public onlyOwner {
        drugAdmin = admin;
    }

    function addOtherAdmin(address admin) public onlyOwner {
        otherAdmin = admin;
    }

    function addComplaint(
        string memory _id,
        uint256 _complaintType,
        string memory _name,
        uint256 _phone,
        string memory _dob,
        string memory _addr,
        string memory _title,
        string memory _desc,
        string memory _nearestPoliceStation,
        string memory _proof,
        string memory _attachment
    ) public {
        string memory _msg = "";
        Complaints[_id] = Complaint(
            _id,
            _complaintType,
            _name,
            _phone,
            _dob,
            _addr,
            _title,
            _desc,
            _nearestPoliceStation,
            _proof,
            _attachment,
            _msg,
            false
        );
        UserComplaints[msg.sender].push(_id);
        idArray.push(_id);
    }

    function checkComplaintStatus() public view returns (string[] memory) {
        return UserComplaints[msg.sender];
    }

    function isAdmin(address admin) private view returns (bool) {
        if (admin == cyberCrimeAdmin) {
            return true;
        } else if (admin == theftAdmin) {
            return true;
        } else if (admin == drugAdmin) {
            return true;
        } else if (admin == otherAdmin) {
            return true;
        }
        return false;
    }

    function validateComplaint(string memory _id, bool _status) public {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        Complaints[_id].status = _status;
        if (_status == true) {
            Complaints[_id].message = "Under investigation";
        } else {
            Complaints[_id].message = "Application rejected";
        }
    }

    function updateMessage(string memory _id, string memory _msg) public {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        Complaints[_id].message = _msg;
    }

    function getCyberCrimeComplaints(uint256 _type)
        public
        view
        returns (string[] memory)
    {
        require(isAdmin(msg.sender), "Only admins can execute this function");

        string[] memory complaintsArray = new string[](idArray.length);
        uint256 index = 0;

        for (uint256 i = 0; i < idArray.length; i++) {
            if (Complaints[idArray[i]].complaintType == _type) {
                complaintsArray[index] = idArray[i];
                index++;
            }
        }

        return complaintsArray;
    }

    function searchComplaint(string memory _id)
        public
        view
        returns (Complaint memory)
    {
        return Complaints[_id];
    }
}
