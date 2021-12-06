<template>
	<base-layout page-title="JAMB">
		<h2 class="title">Izaberite listić za igru:</h2>
		<ion-list>
			<ion-card class="item" router-link="/small-game">Mali listić</ion-card>
			<ion-card class="item" router-link="/medium-game">Srednji listić</ion-card>
			<ion-card class="item" router-link="/large-game">Veliki listić</ion-card>
		</ion-list>
	</base-layout>
</template>

<script>
import { IonList, IonCard } from '@ionic/vue';

export default {
	components: {
		IonList,
		IonCard
	}
};
</script>

<style scoped>
	.title {
		text-align: center;
		font-family: cursive;
		background-color: #eee;
	}
	ion-card {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: calc(100vw * 0.4);
		margin: 20px auto;
		text-align: center;
		border: 2px solid var(--ion-color-primary);
		border-radius: 25px;
		text-transform: uppercase;
		font-family: cursive;
		background-color: #fff;
		font-size: 16px;
		font-weight: 600;
		color: #333;
		letter-spacing: 1px;
	}
	ion-list {
		display: flex;
		flex-direction: column;
		background-color: #eee;
	}
</style>