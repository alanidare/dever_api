import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface Post { //estamos tipando a resposta
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function App() {
  const [mensagem, setMensagem] = useState("");
  const [posts, setPosts] = useState<Post[]>([]); //pode-se tipar o tipo de variável (chamar). Foi delcarado como chamar acima.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // busca mensaagens em outro servidor
      .then((resposta) => resposta.json()) // converte a resposta para Json
      .then((resposta) => {
        console.log(resposta);
        setPosts(resposta); //atribuiu as respostas com os posts
      })

      .catch((err) => {
        console.log("Deu erro :(", err);
      });
  }, []);


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>{mensagem}</Text>

      <ScrollView>
        {posts.map((postagem) => (
          <Text> {postagem.title} </Text>

        ))}
      </ScrollView>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});