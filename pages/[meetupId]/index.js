import React, { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    ></MeetupDetail>
  );
};
export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://jaydenduan888:Woshige+12A@cluster0.csksvfp.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
    
      const meetupsCollection = db.collection("meetups");
    
      const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()
        client.close()
    return {
        fallback: false,
        paths:meetups.map(meetup=>({params:{meetupId: meetup._id.toString()}}))
       
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    const client = await MongoClient.connect(
        "mongodb+srv://jaydenduan888:Woshige+12A@cluster0.csksvfp.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
    
      const meetupsCollection = db.collection("meetups");
      const selectedMeetup = await meetupsCollection.findOne({_id:new ObjectId(meetupId)})

  return {
    props: {
     meetup: {
        id: selectedMeetup._id.toString(),
        title:selectedMeetup.title,
        image:selectedMeetup.image,
        address:selectedMeetup.address,
        description:selectedMeetup.description,
     }
    },
  };
}

export default MeetupDetails;
