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
        bool status;
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
        // require(
        //     msg.sender == superAdmin,
        //     "Only super admin can execute this function"
        // );

        string[] memory arr = new string[](idArray.length);
        uint256 index = 0;

        for (uint256 i = 0; i < idArray.length; i++) {
            if (
                block.timestamp >
                Complaints[idArray[i]].timestamp + threshold * 1 days
            ) {
                arr[index] = idArray[i];
                index++;
            }
        }

        return arr;
    }

    function superAdminAction(
        string memory _id,
        string memory _msg,
        bool _status
    ) public onlySuperAdmin {
        require(
            msg.sender == superAdmin,
            "Only super admin can execute this function"
        );

        Complaint storage complaint = Complaints[_id];
        complaint.message = _msg;
        complaint.status = _status;
        complaint.timestamp = block.timestamp;
    }

    function validateComplaint(
        string memory _id,
        bool _status,
        string memory _msg
    ) public {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        Complaints[_id].status = _status;
        if (_status == true) {
            Complaints[_id].message = "Under investigation";
        } else {
            Complaints[_id].message = _msg;
        }
    }

    function updateMessage(string memory _id, string memory _msg) public {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        Complaints[_id].message = _msg;
    }

    // function getAllComplaints() public view returns (string[] memory) {
    //     return idArray;
    // }

    function viewComplaint(
        string memory _id
    )
        public
        view
        returns (
            string memory,
            uint256,
            string memory,
            string memory,
            bool,
            uint256
        )
    {
        require(
            msg.sender == Complaints[_id].user,
            "Only original author can view complaint!"
        );
        Complaint storage complaint = Complaints[_id];
        return (
            _id,
            complaint.complaintType,
            complaint.description,
            complaint.message,
            complaint.status,
            complaint.timestamp
        );
    }

    function viewComplaints() public view returns (string[] memory) {
        return UserComplaints[msg.sender];
    }

    function getDetails(
        string memory _id
    ) public view returns (Complaint memory) {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        return Complaints[_id];
    }

    function getComplaints() public view returns (string[] memory) {
        require(isAdmin(msg.sender), "Only admins can execute this function");
        uint _type = 0;

        if (msg.sender == superAdmin) {
            return idArray;
        } else if (msg.sender == cyberAdmin) {
            _type = 1;
        } else if (msg.sender == theftAdmin) {
            _type = 2;
        } else if (msg.sender == drugAdmin) {
            _type = 3;
        } else if (msg.sender == othersAdmin) {
            _type = 4;
        }
        string[] memory arr = new string[](idArray.length);
        uint256 index = 0;

        for (uint256 i = 0; i < idArray.length; i++) {
            if (Complaints[idArray[i]].complaintType == _type) {
                arr[index] = idArray[i];
                index++;
            }
        }

        return arr;
    }
}
