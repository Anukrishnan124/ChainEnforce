// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract ComplaintRegistration {
    address owner;
    address superAdmin;
    address cyberAdmin;
    address theftAdmin;
    address drugAdmin;
    address othersAdmin;
    uint256 threshold;
    string[] idArray;

    struct Complaint {
        address user;
        uint256 complaintType; // 1 - cybercrime, 2 - theft, 3 - drug, 4 - others
        string name;
        string email;
        uint256 phone;
        uint256 dob;
        string addr;
        string description;
        string nearestPoliceStation;
        string proof;
        string attachment;
        string message;
        uint256 timestamp;
        uint status; // 1 - accepted, 2 - rejected, 0 - under verification
        bool resolved; // true - case closed
    }

    mapping(string => Complaint) Complaints;
    mapping(address => string[]) UserComplaints;

    constructor() {
        owner = msg.sender;
        threshold = 1;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute this function");
        _;
    }

    modifier onlySuperAdmin() {
        require(
            msg.sender == superAdmin,
            "Only super admin can execute this function"
        );
        _;
    }

    function setThreshold(uint256 x) public onlySuperAdmin {
        threshold = x;
    }

    function addAdmin(address admin, uint256 accType) public onlyOwner {
        if (accType == 1) {
            superAdmin = admin;
        } else if (accType == 2) {
            cyberAdmin = admin;
        } else if (accType == 3) {
            theftAdmin = admin;
        } else if (accType == 4) {
            drugAdmin = admin;
        } else if (accType == 5) {
            othersAdmin == admin;
        }
    }

    function isAdmin(address admin) private view returns (bool) {
        if (
            admin == superAdmin ||
            admin == cyberAdmin ||
            admin == theftAdmin ||
            admin == drugAdmin ||
            admin == othersAdmin
        ) {
            return true;
        }
        return false;
    }

    function addComplaint(
        string memory _id,
        uint256 _complaintType,
        string memory _name,
        string memory _email,
        uint256 _phone,
        uint256 _dob,
        string memory _addr,
        string memory _desc,
        string memory _nearestPoliceStation,
        string memory _proof,
        string memory _attachment
    ) public {
        string memory _msg = "";
        Complaints[_id] = Complaint(
            msg.sender,
            _complaintType,
            _name,
            _email,
            _phone,
            _dob,
            _addr,
            _desc,
            _nearestPoliceStation,
            _proof,
            _attachment,
            _msg,
            block.timestamp,
            0,
            false
        );
        UserComplaints[msg.sender].push(_id);
        idArray.push(_id);
    }

    function getExpiredComplaints()
        public
        view
        onlySuperAdmin
        returns (string[] memory)
    {
        string[] memory arr = new string[](idArray.length);
        uint256 index = 0;

        for (uint256 i = 0; i < idArray.length; i++) {
            if (
                block.timestamp >
                Complaints[idArray[i]].timestamp + threshold * 1 days &&
                Complaints[idArray[i]].resolved == false
            ) {
                arr[index] = idArray[i];
                index++;
            }
        }
        return arr;
    }

    function validateComplaint(
        string memory _id,
        uint _status,
        string memory _msg
    ) public {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        Complaints[_id].status = _status;
        if (_status == 1) {
            Complaints[_id].message = "Under investigation";
        } else if(_status == 2) {
            Complaints[_id].message = _msg;
            Complaints[_id].resolved = true;
        }
        Complaints[_id].timestamp = block.timestamp;
    }

    function updateMessage(string memory _id, string memory _msg) public {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        Complaints[_id].message = _msg;
        Complaints[_id].timestamp = block.timestamp;
    }

    function resolveComplaint(string memory _id, bool resolve) public {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        Complaints[_id].resolved = resolve;
        Complaints[_id].timestamp = block.timestamp;
    }

    function viewComplaint(string memory _id)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            uint,
            uint256,
            bool
        )
    {
        require(
            msg.sender == Complaints[_id].user,
            "Only original author can view complaint!"
        );
        Complaint storage complaint = Complaints[_id];
        return (
            complaint.complaintType,
            complaint.description,
            complaint.message,
            complaint.status,
            complaint.timestamp,
            complaint.resolved
        );
    }

    function viewComplaints() public view returns (string[] memory) {
        return UserComplaints[msg.sender];
    }

    function getDetails(string memory _id)
        public
        view
        returns (Complaint memory)
    {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        return Complaints[_id];
    }

    function getComplaints() public view returns (string[] memory) {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        uint256 _type = 0;

        string[] memory arr = new string[](idArray.length);
        uint256 index = 0;

        if (msg.sender == superAdmin) {
            // return idArray;
            for (uint256 i = 0; i < idArray.length; i++) {
                if (Complaints[idArray[i]].resolved == false) {
                    arr[index] = idArray[i];
                    index++;
                }
            }

            return arr;
        } else if (msg.sender == cyberAdmin) {
            _type = 1;
        } else if (msg.sender == theftAdmin) {
            _type = 2;
        } else if (msg.sender == drugAdmin) {
            _type = 3;
        } else if (msg.sender == othersAdmin) {
            _type = 4;
        }

        for (uint256 i = 0; i < idArray.length; i++) {
            if (
                Complaints[idArray[i]].complaintType == _type &&
                Complaints[idArray[i]].resolved == false 
            ) {
                arr[index] = idArray[i];
                index++;
            }
        }

        return arr;
    }
}