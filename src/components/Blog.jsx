import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Heading, Text } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Timestamp } from 'firebase/firestore';

const formatDate = (timestamp) => {
  const date = timestamp.toDate();
  return date.toLocaleDateString();
};

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'post'));
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>Blog</Heading>
      {posts.map((post) => (
        <Box key={post.id} mb={5}>
          <Heading as="h2" size="lg">{post.title}</Heading>
          <Text>{formatDate(post.date)}</Text>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Box>
      ))}
    </Box>
  );
}
