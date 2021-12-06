<template>
	<base-layout page-title="MALI LISTIC" page-default-back-link="/dashboard">
		<div class="first-square">
			<div class="col-0">
				<div class="field blue">YAMB</div>
				<div class="field">1</div>
				<div class="field">2</div>
				<div class="field">3</div>
				<div class="field">4</div>
				<div class="field">5</div>
				<div class="field">6</div>
				<div class="field blue">SUM</div>
			</div>
			<div class="col-1">
				<div class="field blue">
					<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
				</div>
				<template v-for="item in firstSquareItems['col-1']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<!-- <ion-input type="number" v-model="item.value"></ion-input> -->
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(1) }}</div>
			</div>
			<div class="col-2">
				<div class="field blue">
					<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				</div>
				<template v-for="item in firstSquareItems['col-2']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(2) }}</div>
			</div>
			<div class="col-3">
				<div class="field blue">
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				</div>
				<template v-for="item in firstSquareItems['col-3']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(3) }}</div>
			</div>
			<div class="col-4">
				<div class="field blue">N</div>
				<template v-for="item in firstSquareItems['col-4']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(4) }}</div>
			</div>
			<div class="col-5">
				<div class="field blue">YAMB</div>
				<div class="field large"></div>
				<div class="field blue">{{ firstSquareSumTotal }}</div>
			</div>
		</div>
		<div class="second-square">
			<div class="col-0">
				<div class="field">MAX</div>
				<div class="field">MIN</div>
				<div class="field blue">SUM</div>
			</div>
			<div class="col-1">
				<template v-for="item in secondSquareItems['col-1']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateSecondSquarePerCol(1) }}</div>
			</div>
			<div class="col-2">
				<template v-for="item in secondSquareItems['col-2']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateSecondSquarePerCol(2) }}</div>
			</div>
			<div class="col-3">
				<template v-for="item in secondSquareItems['col-3']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateSecondSquarePerCol(3) }}</div>
			</div>
			<div class="col-4">
				<template v-for="item in secondSquareItems['col-4']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateSecondSquarePerCol(4) }}</div>
			</div>
			<div class="col-5">
				<div class="field large"></div>
				<div class="field blue">{{ secondSquareSumTotal }}</div>
			</div>
		</div>
		<div class="third-square">
			<div class="col-0">
				<div class="field">KENTA</div>
				<div class="field">TRILING</div>
				<div class="field">FUL</div>
				<div class="field">POKER</div>
				<div class="field">YAMB</div>
				<div class="field blue">SUM</div>
			</div>
			<div class="col-1">
				<template v-for="item in thirdSquareItems['col-1']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue" ref="third-1">{{ calculateThirdSquarePerCol(1) }}</div>
			</div>
			<div class="col-2">
				<template v-for="item in thirdSquareItems['col-2']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateThirdSquarePerCol(2) }}</div>
			</div>
			<div class="col-3">
				<template v-for="item in thirdSquareItems['col-3']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateThirdSquarePerCol(3) }}</div>
			</div>
			<div class="col-4">
				<template v-for="item in thirdSquareItems['col-4']" :key="item.id">
					<div class="field" :class="item.class" :id="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateThirdSquarePerCol(4) }}</div>
			</div>
			<div class="col-5">
				<div class="field large">
					<p class="title">TOTAL:</p>
					<div class="total-field">
						{{ firstSquareSumTotal + secondSquareSumTotal + thirdSquareSumTotal }}
					</div>
				</div>
				<div class="field blue">{{ thirdSquareSumTotal }}</div>
			</div>
		</div>
	</base-layout>
</template>

<script>
// import IonInput from '@ionic/vue';

export default {
	data() {
		return {
			firstSquareItems: {
				'col-1': [],
				'col-2': [],
				'col-3': [],
				'col-4': []
			},
			secondSquareItems: {
				'col-1': [],
				'col-2': [],
				'col-3': [],
				'col-4': []
			},
			thirdSquareItems: {
				'col-1': [],
				'col-2': [],
				'col-3': [],
				'col-4': []
			},
			firstSquareSumCol_1: 0,
			firstSquareSumCol_2: 0,
			firstSquareSumCol_3: 0,
			firstSquareSumCol_4: 0,
			firstSquareSumTotal: 0,
			secondSquareSumCol_1: 0,
			secondSquareSumCol_2: 0,
			secondSquareSumCol_3: 0,
			secondSquareSumCol_4: 0,
			secondSquareSumTotal: 0,
			thirdSquareSumCol_1: 0,
			thirdSquareSumCol_2: 0,
			thirdSquareSumCol_3: 0,
			thirdSquareSumCol_4: 0,
			thirdSquareSumTotal: 0,
		}
	},
	mounted() {
		this.getFirstSquare();
		this.getSecondSquare();
		this.getThirdSquare();
	},
	methods: {
		getFirstSquare() {
			for (let i = 1; i <= 6; i++) {
				const item1 = {
					class: `field-1${i}`,
					id: `first-1${i}`,
					value: null
				}
				const item2 = {
					class: `field-2${i}`,
					id: `first-2${i}`,
					value: null
				}
				const item3 = {
					class: `field-3${i}`,
					id: `first-3${i}`,
					value: null
				}
				const item4 = {
					class: `field-4${i}`,
					id: `first-4${i}`,
					value: null
				}

				this.firstSquareItems['col-1'].push(item1);
				this.firstSquareItems['col-2'].push(item2);
				this.firstSquareItems['col-3'].push(item3);
				this.firstSquareItems['col-4'].push(item4);
			}
		},
		getSecondSquare() {
			for (let i = 1; i <= 2; i++) {
				const item1 = {
					class: `field-sec-1${i}`,
					id: `second-1${i}`,
					value: null
				}
				const item2 = {
					class: `field-sec-2${i}`,
					id: `second-2${i}`,
					value: null
				}
				const item3 = {
					class: `field-sec-3${i}`,
					id: `second-3${i}`,
					value: null
				}
				const item4 = {
					class: `field-sec-4${i}`,
					id: `second-4${i}`,
					value: null
				}

				this.secondSquareItems['col-1'].push(item1);
				this.secondSquareItems['col-2'].push(item2);
				this.secondSquareItems['col-3'].push(item3);
				this.secondSquareItems['col-4'].push(item4);
			}
		},
		getThirdSquare() {
			for (let i = 1; i <= 5; i++) {
				const item1 = {
					class: `field-third-1${i}`,
					id: `third-1${i}`,
					value: null
				}
				const item2 = {
					class: `field-third-2${i}`,
					id: `third-2${i}`,
					value: null
				}
				const item3 = {
					class: `field-third-3${i}`,
					id: `third-3${i}`,
					value: null
				}
				const item4 = {
					class: `field-third-4${i}`,
					id: `third-4${i}`,
					value: null
				}

				this.thirdSquareItems['col-1'].push(item1);
				this.thirdSquareItems['col-2'].push(item2);
				this.thirdSquareItems['col-3'].push(item3);
				this.thirdSquareItems['col-4'].push(item4);
			}
		},
		calculateFirstSquarePerCol(numberOfCol) {
			let sum = 0;
			let numOfFilledFields = 0;

			for (let i = 0; i < this.firstSquareItems[`col-${numberOfCol}`].length; i++) {
				let item = this.firstSquareItems[`col-${numberOfCol}`][i];

				if (item.value && item.value !== null) {
					sum += item.value;
					numOfFilledFields++;
				}
			}

			if (numOfFilledFields === 6) {
				if (sum >= 80)
					sum += 50;
				else if (sum >= 70)
					sum += 40;
				else if (sum >= 60)
					sum += 30;
			}

			this.firstSquareSumTotal = this.firstSquareSumCol_1 + this.firstSquareSumCol_2 + this.firstSquareSumCol_3 + this.firstSquareSumCol_4 + sum;

			if (numberOfCol === 1) {
				this.firstSquareSumCol_1 = sum;
				return this.firstSquareSumCol_1 ? this.firstSquareSumCol_1 : 0;
			}
			else if (numberOfCol === 2) {
				this.firstSquareSumCol_2 = sum;
				return this.firstSquareSumCol_2 ? this.firstSquareSumCol_2 : 0;
			}
			else if (numberOfCol === 3) {
				this.firstSquareSumCol_3 = sum;
				return this.firstSquareSumCol_3 ? this.firstSquareSumCol_3 : 0;
			}
			else if (numberOfCol === 4) {
				this.firstSquareSumCol_4 = sum;
				return this.firstSquareSumCol_4 ? this.firstSquareSumCol_4 : 0;
			}
		},
		calculateSecondSquarePerCol(numberOfCol) {
			let sum = 0;

			for (let i = 0; i < this.secondSquareItems[`col-${numberOfCol}`].length; i++) {
				let maxValue = this.secondSquareItems[`col-${numberOfCol}`][0].value;
				let minValue = this.secondSquareItems[`col-${numberOfCol}`][1].value;
				let valueOfOne = this.firstSquareItems[`col-${numberOfCol}`][0].value;

				if (maxValue !== null && minValue !== null && valueOfOne !== null) {
					sum = (maxValue - minValue) * valueOfOne;
				}
			}

			this.secondSquareSumTotal = this.secondSquareSumCol_1 + this.secondSquareSumCol_2 + this.secondSquareSumCol_3 + this.secondSquareSumCol_4 + sum;

			if (numberOfCol === 1) {
				this.secondSquareSumCol_1 = sum;
				return this.secondSquareSumCol_1 ? this.secondSquareSumCol_1 : 0;
			}
			else if (numberOfCol === 2) {
				this.secondSquareSumCol_2 = sum;
				return this.secondSquareSumCol_2 ? this.secondSquareSumCol_2 : 0;
			}
			else if (numberOfCol === 3) {
				this.secondSquareSumCol_3 = sum;
				return this.secondSquareSumCol_3 ? this.secondSquareSumCol_3 : 0;
			}
			else if (numberOfCol === 4) {
				this.secondSquareSumCol_4 = sum;
				return this.secondSquareSumCol_4 ? this.secondSquareSumCol_4 : 0;
			}
		},
		calculateThirdSquarePerCol(numberOfCol) {
			let sum = 0;

			for (let i = 0; i < this.thirdSquareItems[`col-${numberOfCol}`].length; i++) {
				let item = this.thirdSquareItems[`col-${numberOfCol}`][i];

				if (item.value && item.value !== null) {
					sum += item.value;
				}
			}

			this.thirdSquareSumTotal = this.thirdSquareSumCol_1 + this.thirdSquareSumCol_2 + this.thirdSquareSumCol_3 + this.thirdSquareSumCol_4 + sum;

			if (numberOfCol === 1) {
				this.thirdSquareSumCol_1 = sum;
				return this.thirdSquareSumCol_1 ? this.thirdSquareSumCol_1 : 0;
			}
			else if (numberOfCol === 2) {
				this.thirdSquareSumCol_2 = sum;
				return this.thirdSquareSumCol_2 ? this.thirdSquareSumCol_2 : 0;
			}
			else if (numberOfCol === 3) {
				this.thirdSquareSumCol_3 = sum;
				return this.thirdSquareSumCol_3 ? this.thirdSquareSumCol_3 : 0;
			}
			else if (numberOfCol === 4) {
				this.thirdSquareSumCol_4 = sum;
				return this.thirdSquareSumCol_4 ? this.thirdSquareSumCol_4 : 0;
			}
		},
	},
}
</script>

<style scoped>
	.first-square {
		display: grid;
		grid-template: repeat(8, calc((100vh - 56px) / 17)) / repeat(6, 1fr);
	}
	.first-square div {
		grid-row: 1 / 9;
	}
	.icon {
		height: 100%;
		width: 40%;
	}
	.field {
		height: calc((100vh - 56px) / 17);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		border: 1px solid #000;
		font-family: cursive;
	}
	.field.blue {
		background-color: #b6d1ff;
	}
	.field.large {
		height: calc(6 * (100vh - 56px) / 17);
	}
	.field input {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		text-align: center;
		border: none;
	}
	.second-square {
		display: grid;
		grid-template: repeat(3, calc((100vh - 56px) / 17)) / repeat(6, 1fr);
	}
	.second-square div {
		grid-row: 1 / 4;
	}
	.second-square .field.large {
		height: calc(2 * (100vh - 56px) / 17);
	}
	.third-square {
		display: grid;
		grid-template: repeat(6, calc((100vh - 56px) / 17)) / repeat(6, 1fr);
	}
	.third-square div {
		grid-row: 1 / 7;
	}
	.third-square .col-0 .field:not(.blue) {
		font-size: 12px;
		font-weight: 600;
	}
	.third-square .field.large {
		height: calc(5 * (100vh - 56px) / 17);
		display: flex;
		flex-direction: column;
	}
	.third-square .title {
		font-size: 12px;
		font-weight: 600;
		margin-bottom: 0;
	}
	.first-square .col-0 .field, .second-square .col-0 .field, .third-square .col-0 .field, .field.blue, .third-square .field.large {
		font-weight: 600;
	}
	.total-field {
		width: calc(100% - 6px);
		margin-top: 10px;
		padding: 10px 5px;
		text-align: center;
		border: 2px solid #000;
		border-radius: 18px;
		background-color: #b6d1ff;
	}
</style>