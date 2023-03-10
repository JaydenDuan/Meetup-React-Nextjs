import React, { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Jayden-Duan-Meetup</title>
        <meta name="description" content="Highly used React + NextJs Meetups Website!"/>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </Fragment>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export async function getStaticProps() {
  // fetch('./api/meetups')
  const client = await MongoClient.connect(
    "mongodb+srv://jaydenduan888:Woshige+12A@cluster0.csksvfp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
