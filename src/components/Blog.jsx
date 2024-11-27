import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Heading, Text } from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    const allPosts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        content,
      };
    });

    setPosts(allPosts);
  }, []);

  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>Blog</Heading>
      {posts.map((post) => (
        <Box key={post.slug} mb={5}>
          <Heading as="h2" size="lg">{post.title}</Heading>
          <Text>{post.date}</Text>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Box>
      ))}
    </Box>
  );
}
